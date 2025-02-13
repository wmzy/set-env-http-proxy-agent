# Set-env-http-proxy-agent

This package allows you to set the HTTP_PROXY and HTTPS_PROXY environment variables to enable the use of the node fetch API.

## Usage

- Installation globally

```bash
npm i -g set-env-http-proxy-agent
```

or pnpm

```bash
pnpm add -g set-env-http-proxy-agent
```

- Export the environment variables by editing the `~/.zshrc` or `~/.bashrc` file

```sh
# export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890

export NODE_OPTIONS="--import set-env-http-proxy-agent"
```

## License

MIT
