import { Pool } from 'pg';
import { connectionString } from './settings';

const db = new Pool({ connectionString });

export default db;