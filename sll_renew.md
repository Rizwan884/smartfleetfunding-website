## Getting Started

Run certbot to renew the ssl certificate:
```bash
sudo certbot certonly -d smartfleetfunding.com -d www.smartfleetfunding.com --manual
```
Follow the prompts to complete the renewal process.
```
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator manual, Installer None
Requesting a certificate for smartfleetfunding.com and www.smartfleetfunding.com
Performing the following challenges:
http-01 challenge for smartfleetfunding.com
http-01 challenge for www.smartfleetfunding.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Create a file containing just this data:

{token}

And make it available on your web server at this URL:

http://smartfleetfunding.com/.well-known/acme-challenge/{token_filename}

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```

Create file to storage the token:
```bash
nano certbot/smartfleetfunding.com/.well-known/acme-challenge/{token_filename}
```
Copy and paste {token} into the file and save it.

Restart services
```bash
sudo /opt/bitnami/ctlscript.sh restart
```