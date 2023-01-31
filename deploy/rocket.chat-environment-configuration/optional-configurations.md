# Firewall Configuration

If you are using firewalld and not using a reverse proxy, you may have to allow traffic to port 3000:

```bash
sudo firewall-cmd --permanent --add-port=3000/tcp
```

```bash
sudo systemctl reload firewalld
```
