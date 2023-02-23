# Getting Started 

This project is a guided walkthrough on testing ngrok tunnels for your existing projects.

## Pre-requisites

In order to proceed, you need to:
1. Check your nodeJS version and ensure it is at least version 16 with: ```node -v```
2. Install yarn globally with: ```npm install -g yarn```
3. We assume you are using MacOS and using Homebrew
4. We assume you have a REST client installed such as Postman or Insomnia

### Let's begin by installing Ngrok:
``` 
brew update && brew install ngrok
```

*Note: There are multiple ways to install based on your OS. You can install using NPM or Yarn, however the it is not the latest version and some newer ngrok commands will not work*.

### Check your version of ngrok:
``` 
ngrok -v 
```

*Note: You should at least have version 3.1.1 or the next command will not work


### Go to https://dashboard.ngrok.com/get-started/your-authtoken:

Create your account and login if you need to, then make note of you Authtoken at the top of this page

### Authenticate your ngrok agent.
This ensures your terminal activity is connected to your ngrok account. You get additional benefits like reserved subdomains. Run this following command:

```
ngrok config add-authtoken <YOUR-AUTHTOKEN>
```


### Install dependencies for the backend.
From install the parent directory of this repo, run the following command:

```
cd api && yarn install
```


### Start the backend development server
The backend server uses Strapi, one of the leading headless content management systems (CMS).

```
yarn develop
```


### Go to http://localhost:1337/admin (Optional)

Create your new user account (if necessary), and click around the backoffice.

### Go to http://localhost:1337/documentation (Optional)
Find that the API is self-documented using swagger docs

### Start your ngrok tunnel
```
ngrok http 1337
```

*Try going back to your browser and replacing http://localhost:1337/admin with your new ngrok url :-)


*You can use this url to test webhooks, like Stripe.
*You can use this url in place of localhost for local frontend development, especially when testing a mobile client.

### Create a custom subdomain for ease of use:
First, close your existing tunnel with CTL + C.
Next, run the following command to create a custom subdomain:

```
ngrok http --subdomain hwth2023 1337
```

*You will have to pick your own unique subdomain because no two subdomains can be identical in ngrok

### To inspect your traffic, open http://localhost:4040

### Let's create some traffic:
Open your REST client and create a POST request to:
``` https://subdomain.ngrok.io/api/auth/local/register```

with the following JSON payload:
```
{
  "email": "your-email@example.com",
  "username": "your-username",
  "password": "your-password"
}
```
Next, Login with using the credentials you just created with a POST request to:

``` 
https://subdomain.ngrok.io/api/auth/local
```

with the following JSON payload:

```
{
  "identifier": "email-or-username",
  "password": "your-password"
}
```

### Visit https://dashboard.ngrok.com/cloud-edge/endpoints to view and manage your ngrok endpoints from a Graphical interface.

1. If you click your url, it will open our backoffice. 
2. When you close that tab, ngrok will ask if you want to reserve your subdomain. 
3. Reserved subdomains persist under your ownership even after you stop the tunnel.
4. If you do not reserve your custom subdomain, anyone else can use it.

*This feature is very helpful should you decide to permanently add ngrok to your dev toolchain, and is especially helpful when testing webhooks and mobile apps.

### Bonus Tip
You can create a tunnel for your frontend web client to test mobile responsiveness easily on physical smartphones and tablets.

