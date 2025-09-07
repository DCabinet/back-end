# DCabinet Back-End Project

## Table of Contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [bin/ Scripts](#bin-scripts)
- [Running the Application](#running-the-application)
- [Docker Usage](#docker-usage)
- [Linting](#linting)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Configuration Override Rules](#configuration-override-rules)
- [Contributing](#contributing)

---

## Overview

This project is a Node.js application.  
It provides helper scripts in the `bin/` directory to manage installation, development, Docker containers, and linting.

---

## Requirements

- Node.js: v18.19.1
- npm: v20.19.5
- Docker and Docker Compose (optional, if you want to run with Docker)

---

## Docker Usage

Start containers:

```bash
bin/docker up
```

Stop containers:

```bash
bin/docker down
```

---

## Linting

Check code style and formatting:

```bash
bin/lint
```

---

## Project Structure

```
project-root/
├── bin/                
│   ├── dev             # Run development server
│   ├── install         # Install dependencies
│   ├── docker          # Manage Docker containers
│   └── lint            # Run lint checks
├── src/                # Application source code
├── tests/              # Test files
├── package.json        
└── README.md           
```

---

## Development Workflow

1. Install dependencies with `bin/install`
2. Run the app with `bin/dev`
3. Run lint checks with `bin/lint` before committing
4. Use Docker (`bin/docker up`) if needed

---

## Configuration Override Rules

This project supports overriding configuration values (e.g., from environment variables).

### Convention

* Keys with an underscore `_` will be transformed into nested objects.

Example:

```
a_b = value
```

is interpreted as:

```json
{
  "a": {
    "b": "value"
  }
}
```

### Usage Example

Set environment variable:

```bash
export app_adminPassword=supersecure
```

The application will interpret it as:

```json
{
  "app": {
    "adminPassword": "supersecure"
  }
}
```

This allows overriding sensitive settings (passwords, secrets, URLs) without editing the `appsettings.json` directly.

---

## Environment Variables Reference

### SMTP

* `smtp_host` — SMTP server host (default: `smtp.gmail.com`)
* `smtp_port` — SMTP server port (default: `587`)
* `smtp_user` — SMTP username
* `smtp_pass` — SMTP password
* `smtp_secure` — Use TLS/SSL (`true` or `false`)

### MongoDB

* `mongo_rootUser` — root username
* `mongo_rootPassword` — root password
* `mongo_connectionUrl` — connection string
* `mongo_baseDbName` — base database name
* `mongo_universalDbName` — universal database name
* `mongo_agendaDbName` — agenda database name

### MinIO

* `minio_url` — MinIO server URL
* `minio_rootUser` — root username
* `minio_rootPassword` — root password
* `minio_user` — application username
* `minio_userPassword` — application password
* `minio_bucket` — bucket name

### Redis

* `redis_host` — Redis host
* `redis_port` — Redis port
* `redis_password` — Redis password
* `redis_connectTimeout` — connection timeout in ms

### Security

* `security_hmacSecret` — HMAC secret for signing
* `security_auth_google-oauth_clientId` — Google OAuth Client ID
* `security_auth_google-oauth_clientSecret` — Google OAuth Client Secret
* `security_auth_google-oauth_callbackUrl` — Google OAuth Callback URL

### App

* `app_adminPassword` — admin password
* `app_masterPassword` — master password

### Node

* `node_env` — environment (`development`, `production`, etc.)

### Server

* `server_port` — port where the app runs

---

## Contributing

1. Fork the repository
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit and push your changes
4. Open a pull request

✅ Make sure lint checks pass before submitting.

---

```
```
