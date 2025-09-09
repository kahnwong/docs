---
outline: deep
---

# Golang

## Libraries

### Frameworks / Libraries

- [cel-go](https://github.com/google/cel-go) - Fast, portable, non-Turing complete expression evaluation with gradual typing (Go)
- [expr](https://github.com/expr-lang/expr) - Expression language and expression evaluation for Go


### CLI

- [cobra](https://github.com/spf13/cobra) - A Commander for modern Go CLI interactions
- [color](https://github.com/fatih/color) - Color package for Go
- [huh](https://github.com/charmbracelet/huh) - Build terminal forms and prompts 🤷🏻‍♀️
- [progressbar](https://github.com/schollz/progressbar) - A really basic thread-safe progress bar for Golang applications

### Backend

- [automaxprocs](https://github.com/uber-go/automaxprocs) - Automatically set GOMAXPROCS to match Linux container CPU quota
- [feugo](https://github.com/go-fuego/fuego) - Golang Fuego - Web framework generating OpenAPI 3 spec from source code - Pluggable to existing Gin & Echo APIs
- [gofiber](https://github.com/gofiber/fiber) - ⚡️ Express inspired web framework written in Go
- [requests](https://github.com/carlmjohnson/requests) - HTTP requests for Gophers
- [watermill](https://github.com/ThreeDotsLabs/watermill) - Building event-driven applications the easy way in Go

### Concurrency

- [errgroup](https://pkg.go.dev/golang.org/x/sync/errgroup) - Package errgroup provides synchronization, error propagation, and Context cancelation for groups of goroutines working on subtasks of a common task.

### Systems
- [clipboard-image](https://github.com/skanehira/clipboard-image)
- [clipboard](https://github.com/atotto/clipboard)
- [conc](https://github.com/sourcegraph/conc) - Better structured concurrency for go
- [fsnotify](https://github.com/fsnotify/fsnotify) - Cross-platform filesystem notifications for Go.
- [gopsutil](https://github.com/shirou/gopsutil) - psutil for golang

### Testing
- [dockertest](https://github.com/ory/dockertest) - Write better integration tests! Dockertest helps you boot up ephermal docker images for your Go tests with minimal work.
- [testify](https://github.com/stretchr/testify) - A toolkit with common assertions and mocks that plays nicely with the standard library

### Utilities

- [go-querystring](https://github.com/google/go-querystring) - go-querystring is Go library for encoding structs into URL query strings
- [sops](https://pkg.go.dev/github.com/getsops/sops/v3)
- [validator](https://github.com/go-playground/validator) - 💯Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving
- [zerolog](https://github.com/rs/zerolog) - Zero Allocation JSON Logger

## Cookbook

### Reduce binary size

```bash
go build -ldflags="-s -w" <your-package>
```

### Cross-platform build

```bash
GOOS=linux GOARCH=arm64 go build
```

### Receive multiple returns from goroutine

<https://stackoverflow.com/a/17825968>

## Humor

- [Write in Go (Fall 2014)](https://www.youtube.com/watch?v=LJvEIjRBSDA)

## References

- [Rust + Go(lang)](https://github.com/mediremi/rust-plus-golang)
- [GoReleaser Example](https://webinstall.dev/goreleaser/)

## Resources

- [Convert JSON to Go struct](https://mholt.github.io/json-to-go/)
- [golang styleguide](https://google.github.io/styleguide/go/)
- [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)
- [Errors in Go](https://miparnisariblog.wordpress.com/2024/07/28/errors-in-go/)
- [Go by Example](https://gobyexample.com/)
- [Standard Go Project Layout](https://github.com/golang-standards/project-layout)
