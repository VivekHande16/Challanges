# Challange 2

## Problem statement 

We need to write code that will query the meta data of an instance within Azure and provide a json formatted output. The choice of language and implementation is up to you.

## Approach 

I am using Azure cloud and node js to get the metadata of all the running instances in the Azure.

Since we need the data in json format, node is perfect for it. We can use npm "requests" package to fetch all the data and then convert the data into json format.

The Instance Metadata Service is only accessible from within a running virtual machine instance on a non-routable IP address. VMs are limited to interacting with metadata/functionality that pertains to themselves. The API is HTTP only and never leaves the host.

In order to ensure that requests are directly intended for IMDS and prevent unintended or unwanted redirection of requests, requests:

Must contain the header Metadata: true
Must not contain an X-Forwarded-For header

Our api request would look like:

http://169.254.169.254/metadata/instance/compute?api-version=2021-01-01&format=json

We use npm "express" package to send the data to browser to show it.

## How to run Node js app

1. Clone the repository in your local.

2. Open the terminal and go to Challange3 folder.

3. Run command: npm install. It will install all dependencies that required for app to run.

4. Run command: npm start.