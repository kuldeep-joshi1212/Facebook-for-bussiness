import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Ensure that the request contains a JSON body
            const contentType = req.headers['content-type'];
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Invalid Content-Type. Must be application/json.');
            }

            // Parse the incoming JSON payload
            const payload = req.body;
            console.log('Received webhook payload:', payload);

            // Handle the webhook payload here
            // Example: Update database, send notifications, etc.

            res.status(200).end();
        } catch (error) {
            console.error('Error processing webhook:', error);
            res.status(500).json({ error: 'An error occurred while processing the webhook.' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
export {handler as GET,handler as POST};