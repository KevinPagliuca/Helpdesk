const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { subject, category, priority, description, assignTo, requester, status } = req.body;

        var date = new Date();
        const DataHoje = date.toLocaleString();

        
            const InsertNewTicket = await connection('tickets').insert({
                subject,
                category,
                priority,
                description,
                assignTo,
                requester,
                status,
                created_at: DataHoje,
                updated_at: DataHoje
            });            

            res.status(200).json({InsertNewTicket});        
    }
}