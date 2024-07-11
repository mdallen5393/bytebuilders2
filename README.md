# ByteBuilders LLC Website

<img src="./src/assets/logo flat (darkmode).svg" alt="ByteBuilders Logo">

## Project Overview

This website was created by Matthew Allen for ByteBuilders LLC, which is owned by Troy Bumgardner.

The website utilizes **VueJS** for the frontend and **Firebase** for the backend and hosting.  The `bumfam.us` domain is through GoDaddy and includes a **Microsoft Exchange/Microsoft365** account, including email.

Firebase services used include:

- **Hosting:** Used for web hosting
- **Firestore Database:** A NoSQL database used to store information about each Initiative and About section.
- **Storage:** Contains images and files used for Initiatives.
- **Functions:** Contains the sendContactEmail function, which adds functionality to the contact form

In order to email the Microsoft Exchange/Microsoft365 email address, the **Microsoft Graph API** was used for authentication (OAuth2), rather than setting up the less secure SMTP AUTH.

Use of the Graph API required the creation of a **Microsoft Azure** account and use of **Microsoft Entra ID** (formerly Azure Active Directory) to register the app and give appropriate permissions.

## Setup Instructions

### Front-end Development

```bash
npm install
```

#### Compiles and hot-reloads for development

```bash
npm run serve
```

#### Compiles and minifies for production

```bash
npm run build
```

#### Lints and fixes files

```bash
npm run lint
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Back-End Setup

Please contact Matthew Allen for access to Firebase and/or Azure.  I will also share important information environment information (.env).

Troy Bumgardner and Matthew Allen can provide access to the Microsoft Exchange/365 account.

## Database Structure

### Initiatives Table

| Field Name | Description |
|------------|-------------|
| `Document ID` | Use "Auto-ID" selection |
| `alt` | alt-text for the image |
| `blurb` | a few words describing the mission of the initiative |
| `description` | a longer paragraph with information about the initiative |
| `image` | the name of the image file contained within Firebase Storage |
| `link` | a link to the website or social media for that initiative |
| `name` | the name of the initiative |
| `order`* | the desired order of appearance of the initiatives |

*It should be noted that the `order` field is not protected against repeated values.*

Currently, the About section only has one card; if, in the future, more cards are desired (such as for other members of staff or members of the Bumgardner family), it is recommended that a new Firestore table be added.

## Deployment

To deploy, run the following commands in your console:

```bash
npm run build
firebase deploy
```

### GitHub Actions <span style="color: red">*(known bug)*</span>

Currently, GitHub Actions is set up to deploy upon merge or push to main.  However, this does not currently work (it deploys with errors).

## Contact Information

### ***Matthew Allen***

<a href="https://github.com/mdallen5393">
  <img src="./assets/github-mark-white.svg" alt="GitHub Logo" width="30" height="30">
</a>
<a href="https://www.linkedin.com/in/itsmatthewallen/">
  <img src="./assets/LI-In-Bug.png" alt="LinkedIn Logo" width="30">
</a>

Connect with me!</br>
Ask me questions!</br>
***Hire me!***
