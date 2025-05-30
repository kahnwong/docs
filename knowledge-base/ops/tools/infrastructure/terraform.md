---
outline: deep
---

# Terraform

## Import block

```hcl
import {
  to = google_container_cluster.auto
  id = "asia-southeast1/autopilot-cluster-1"
}
```

## [cf-terraforming](https://github.com/cloudflare/cf-terraforming)

```bash
cf-terraforming generate -t $TOKEN -z $ZONE --resource-type cloudflare_record > importing-example.tf
```

## Cookbook

### Force re-create resources

```bash
terraform apply -replace=aws_lightsail_instance_public_ports.myserver-sig-public-ports
```

### Migrate Terraform remote tfstates

```bash
terraform state pull > dev.tfstate
terraform state mv -state-out=dev.tfstate module.lambda.module.your_function module.your_function
terraform state mv \
    -state=dev.tfstate \
    -state-out=workspace/dev.tfstate \
    aws_iam_role.a \
    aws_iam_role.a
terraform state push dev.tfstate
```

### multi-variable for for-each

<https://developer.hashicorp.com/terraform/language/functions/flatten>

```hcl
locals {
  # flatten ensures that this local value is a flat list of objects, rather
  # than a list of lists of objects.
  network_subnets = flatten([
    for network_key, network in var.networks : [
      for subnet_key, subnet in network.subnets : {
        network_key = network_key
        subnet_key  = subnet_key
        network_id  = aws_vpc.example[network_key].id
        cidr_block  = subnet.cidr_block
      }
    ]
  ])
}

resource "aws_subnet" "example" {
  # local.network_subnets is a list, so we must now project it into a map
  # where each key is unique. We'll combine the network and subnet keys to
  # produce a single unique key per instance.
  for_each = {
    for subnet in local.network_subnets : "${subnet.network_key}.${subnet.subnet_key}" => subnet
  }

  vpc_id            = each.value.network_id
  availability_zone = each.value.subnet_key
  cidr_block        = each.value.cidr_block
}
```

### array of dict structs

```hcl
locals {
  task_info = [
    {
      name       = "mlflow"
      task_role  = aws_iam_role.task.arn
      caddy_port = 8001
      domain     = "mlflow.example.com"
    }
  ]
}
locals {
  info_dict     = { for o in local.task_info : o.name => o }
  service_names = toset(local.task_info[*].name)
}

resource "aws_ecs_task_definition" "this" {
  for_each = local.service_names
  family   = each.key

  container_definitions = templatefile("./templates/${each.value}_task_definition.tpl.json", {
    log_group       = aws_cloudwatch_log_group.awslogs.name
    ecs_secrets_arn = aws_secretsmanager_secret.secrets.arn
  })

  task_role_arn      = local.info_dict[each.key]["task_role"]
  execution_role_arn = aws_iam_role.task.arn

  tags = {
    managedBy = "org/infra"
    Project   = "data-platform"
  }
}
```

## Tools

- [terrakube](https://terrakube.org/) - Open source IaC Automation and Collaboration Software.
- [digger](https://docs.digger.dev/readme/introduction) - Open-source CI/CD orchestrator for Terraform.

## Resources

- [My Terraform Standards](https://brendanthompson.com/posts/2021/11/my-terraform-standards)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [Terraform Opinion #23: Use list of objects over map of maps](https://jq1.io/posts/opinion_23/)

### Examples

- [GOV.UK Infrastructure](https://github.com/alphagov/govuk-infrastructure)
- [partinfra-terraform](https://github.com/mozilla/partinfra-terraform) - Terraform configuration for Participation Infrastructure.
