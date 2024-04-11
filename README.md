# Darling Moon Shop

Darling Moon Shop is an online storefront application. This application allows the user the ability to register as a customer, browse the inventory list of products, add and remove products to the cart, and make purchases.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
Node
Postgres
Git
```

### Installing

Install project dependencies

```
npm install
```

End with an example of getting some data out of the system or using it for a little demo

## Running Application

Run databse from postgresql. use the `databse.sql` to initialize the database.

1. Create a database named `darling_moon`.
2. As this project is built on Postgres, make sure you have this installed before running the necessary query tables in Postico.
3. Open VSCode and start building the application.

4. In one terminal run ...

```
npm run server
```

5. In a separate terminal run ...

```
npm run client
```

## Deployment

1. Create a new Heroku project.
2. Link the Heroku project to the project GitHub Repo.
3. Create an Heroku Postgres database.
4. Connect to the Heroku Postgres database from Postico.
5. Create the necessary tables.
6. Add an environment variable for SERVER_SESSION_SECRET with a nice random string for security.
7. In the deploy section, select manual deploy.

## Built With

- Node.js
- Express.js
- React
- Redux
- Postgresql
- Postico
- Heroku
- Material-UI
- DrawSQL
- Balsamiq

## Authors

- **Ying Her** - [[GitHub Profile](https://github.com/yherxx461)] ()

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

Thanks to Prime Digital Academy who equipped and helped me make this application possible. Super special thanks to Myron for the guidance and help throughout this project!

## Support

If you have any suggestions or issues, please contact me at yher.prime@gmail.com
