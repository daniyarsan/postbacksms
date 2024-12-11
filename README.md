# Project Setup Instructions

Follow these steps to set up and run the project locally:

## 1. Rename `.env.local` to `.env`
- Locate the `.env.local` file in the root directory of the project.
- Rename it to `.env`.

## 2. Start the Project
- Run the following command to start the project:

```bash
make start
```

## 3. Access the Application
- Open your browser and navigate to:

```
http://localhost:<port>
```

- Replace `<port>` with the value of the `NGINX_HOST_HTTP_PORT` parameter defined in your `.env` file.
- If no port is explicitly defined, the default port is **9001**.

### Example
If `NGINX_HOST_HTTP_PORT=9001`, go to:

```
http://localhost:9001
