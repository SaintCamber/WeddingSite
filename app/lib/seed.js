const { sql } = require('@vercel/postgres')

async function seed() {

    const createUserTable = await sql`
        CREATE TABLE Users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `

    const createRSVPTable = await sql`
        CREATE TABLE rsvp (
            id SERIAL PRIMARY KEY,
            user_id INT,
            attending BOOLEAN,
            dietaryRestrictions VARCHAR(255),
            "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES Users(id)
        );
        `

    const createRegistryTable = await sql`
        CREATE TABLE registry (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            url VARCHAR(255),
            image VARCHAR(255),
            price INT,
            description VARCHAR(255)

        );
        `
    const createGalleryTable = await sql`
        CREATE TABLE gallery (
            id SERIAL PRIMARY KEY,
            image VARCHAR(255),
            description VARCHAR(255)
        );
        `

    const createContactTable = await sql`
       CREATE TABLE contact (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            phone VARCHAR(255),
            message VARCHAR(255)
        );
        `
        console.log('Tables created')

    const users = await sql`
        INSERT INTO Users (name, email, password)
        VALUES ('admin', 'example@example.com', 'password')
        `
    const registry = await sql`
        INSERT INTO registry (name, url, image, price, description)
        VALUES ('Amazon', 'https://www.amazon.com', 'https://www.amazon.com', 100, 'Gifts from Amazon')
        `
    const gallery = await sql`
        INSERT INTO gallery (image, description)
        VALUES ('https://www.example.com', 'example')
        `
    const contact = await sql`
        INSERT INTO contact (name, email, phone, message)
        VALUES ('hunter', 'hunter@email.com', '1234567890', 'hello from hunter')
        `

    console.log('Data seeded')




    return {
        createUserTable,
        createRSVPTable,
        createRegistryTable,
        createGalleryTable,
        createContactTable,
        users,
        registry,
        gallery,
        contact,
      }


}


seed();

module.exports = seed;
