# ArgoCD

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

argocd admin initial-password -n argocd
argocd login <ARGOCD_SERVER>
```

## Tools

- [argo-rollouts](https://github.com/argoproj/argo-rollouts) - Progressive Delivery for Kubernetes
