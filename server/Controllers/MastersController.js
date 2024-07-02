import MasterService from '../services/MasterService.js';

class MastersController {
    async getAvailableMasters(req, res) {
        try {
            const { procedureId } = req.body;

            const availableMasters = await MasterService.getAvailableMasters(
                procedureId,
            );
            return res.json(availableMasters);
        } catch (e) {
            res.json({ masters: 'not found' });
            res.status(500).json(e);
        }
    }
}

export default new MastersController();

// const addIdMasters = [
// 	{
// 		_id: new ObjectId(),
// 		name: 'Popova Kristina',
// 		procedures: ['1', '2'],
// 	},
// 	{
// 		_id: new ObjectId(),
// 		name: 'Zueva Darya',
// 		procedures: ['1', '5'],
// 	},
// 	{
// 		_id: new ObjectId(),
// 		name: 'Nekrasova Julia',
// 		procedures: ['2', '3'],
// 	},
// 	{
// 		_id: new ObjectId(),
// 		name: 'Morozova Sofya',
// 		procedures: ['3', '4'],
// 	},

// 	// [

// 	// 	{"name": "Zakharove Kseniya",
// 	// 	"procedures": " ['1', '3', '5']"}

// 	//   ]

// 	{
// 		_id: new ObjectId(),
// 		name: 'Nelybina Maria',
// 		procedures: ['3', '4', '5'],
// 	},
// 	{
// 		_id: new ObjectId(),
// 		name: 'Andreeva Katya',
// 		procedures: ['1', '4'],
// 	},
// 	{
// 		_id: new ObjectId(),
// 		name: 'Vasilyeva Vika',
// 		procedures: ['4', '5'],
// 	},
// 	{
// 		_id: new ObjectId(),
// 		name: 'Zakharove Kseniya',
// 		procedures: ['1', '3', '5'],
// 	},
// ];
