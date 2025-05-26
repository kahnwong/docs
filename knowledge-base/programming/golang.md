---
outline: deep
---

# Golang

## Libraries

### Frameworks

- [expr](https://github.com/expr-lang/expr) - Expression language and expression evaluation for Go


### CLI

- [cobra](https://github.com/spf13/cobra) - A Commander for modern Go CLI interactions
- [color](https://github.com/fatih/color) - Color package for Go
- [huh](https://github.com/charmbracelet/huh) - Build terminal forms and prompts 🤷🏻‍♀️
- [progressbar](https://github.com/schollz/progressbar) - A really basic thread-safe progress bar for Golang applications
- [viper](https://github.com/spf13/viper) - Go configuration with fangs

### Backend

- [gofiber](https://github.com/gofiber/fiber/v2) - ⚡️ Express inspired web framework written in Go
- [requests](https://github.com/carlmjohnson/requests) - HTTP requests for Gophers
- [watermill](https://github.com/ThreeDotsLabs/watermill) - Building event-driven applications the easy way in Go
- [automaxprocs](https://github.com/uber-go/automaxprocs) - Automatically set GOMAXPROCS to match Linux container CPU quota

### Concurrency

- [errgroup](https://pkg.go.dev/golang.org/x/sync/errgroup) - Package errgroup provides synchronization, error propagation, and Context cancelation for groups of goroutines working on subtasks of a common task.

### Systems
- [clipboard-image](https://github.com/skanehira/clipboard-image)
- [clipboard](https://github.com/atotto/clipboard)
- [conc](https://github.com/sourcegraph/conc) - Better structured concurrency for go
- [gopsutil](https://github.com/shirou/gopsutil) - psutil for golang

### Testing
- [dockertest](https://github.com/ory/dockertest) - Write better integration tests! Dockertest helps you boot up ephermal docker images for your Go tests with minimal work.
- [testify](https://github.com/stretchr/testify) - A toolkit with common assertions and mocks that plays nicely with the standard library

### Utilities

- [go-querystring](https://github.com/google/go-querystring) - go-querystring is Go library for encoding structs into URL query strings
- [godotenv](https://github.com/joho/godotenv) - A Go port of Ruby's dotenv library (Loads environment variables from .env files)
- [sops](https://pkg.go.dev/github.com/getsops/sops/v3)
- [validator](https://github.com/go-playground/validator) - 💯Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving
- [zerolog](https://github.com/rs/zerolog) - Zero Allocation JSON Logger

## Cookbook

### Reduce binary size

```bash
go build -ldflags="-s -w" <your-package>
```

### Receive multiple returns from goroutine

<https://stackoverflow.com/a/17825968>

## Humor

- [Write in Go (Fall 2014)](https://www.youtube.com/watch?v=LJvEIjRBSDA)

## Resources

- [Convert JSON to Go struct](https://mholt.github.io/json-to-go/)
- [golang styleguide](https://google.github.io/styleguide/go/)
- [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)
- [Errors in Go](https://miparnisariblog.wordpress.com/2024/07/28/errors-in-go/)
- [Go by Example](https://gobyexample.com/)
