# Intro

## How to reproduce

### Step 1: Build with Docker

```bash
# Windows
$> docker buildx build -t some_envs_are_ignored .
```

### Step 2: Run the Image

```bash
# Windows
$> docker run --env-file=.env some_envs_are_ignored
```
