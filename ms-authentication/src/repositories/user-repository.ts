import DatabaseError from '../models/errors/database-error-model';
import db from '../db';
import User from '../models/user-model';
import { secretHash } from '../settings';

class UserRepository {

    async findAll(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const { rows } = await db.query<User>(query);

        return rows || [];
    }

    async findById(uuid: string): Promise<User> {
        try {
            const query = `
                SELECT uuid, username
                FROM application_user
                WHERE uuid = $1
            `;

            const values = [uuid]

            const { rows } = await db.query<User>(query, values);
            const [user] = rows;

            return user;

        } catch (error) {
            throw new DatabaseError('Error in query by ID', error);
        }
    }

    async create(user: User): Promise<string> {
        const query = `
            INSERT INTO application_user (
                username,
                password
            )
            VALUES ($1, crypt($2, $3))
            RETURNING uuid
        `

        const values = [user.username, user.password, secretHash]

        const { rows } = await db.query<{ uuid: string }>(query, values);
        const [newUser] = rows;

        return newUser.uuid;
    }

    async update(user: User): Promise<void> {
        const query = `
            UPDATE application_user
            SET 
                username = $1,
                password = crypt($2, $3)
            WHERE uuid = $4
        `
        const values = [user.username, user.password, secretHash, user.uuid];

        await db.query<User>(query, values);
    }

    async delete(uuid: string): Promise<void> {
        const query = `
            DELETE 
            FROM application_user
            WHERE uuid = $1
        `;

        const values = [uuid];

        await db.query(query, values);
    }

    async findByUsernameAndPassword(username: string, password: string): Promise<User | null> {
        try {
            const query = `
            SELECT uuid, username
            FROM application_user
            WHERE username = $1 AND password = crypt($2, $3)
        `
            const values = [username, password, secretHash]

            const { rows } = await db.query<User>(query, values);
            const [user] = rows;

            return user || null;
            
        } catch (error) {
            throw new DatabaseError('Error in querying by username and password', error);
        }


    }
}

export default new UserRepository();