const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://postgres.umvqfijgyrkcxaubrerq:fSmuQ9XdAtHHqolQ@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres',
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()
    .then(() => console.log('Koneksi berhasil'))
    .catch((err) => console.error('Koneksi gagal:', err))
    .finally(() => client.end());
