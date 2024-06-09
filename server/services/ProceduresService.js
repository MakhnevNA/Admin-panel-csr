import Procedures from '../Shema/Procedures.js';

class ProceduresService {
    async getAvailableProcedures(mastersProceduresId) {
        let availableProcedures;

        if (mastersProceduresId) {
            // Если был передан mastersProceduresId, то возвращаем все процедуры, которые входят в mastersProceduresId
            availableProcedures = await Procedures.find({
                procedureId: { $in: mastersProceduresId },
            });
            return availableProcedures;
        } else {
            // Если mastersProceduresId не был передан, то возвращаем все процедуры
            availableProcedures = await Procedures.find();
            return availableProcedures;
        }
    }
}

export default new ProceduresService();

// "{ '_id': '2', 'name': 'Zueva Darya', 'procedures': ['1', '5']}",
// "{ '_id': '3', 'name': 'Nekrasova Julia', 'procedures': ['2', '3'] }",
// "{ '_id': '4', 'name': 'Morozova Sofya', 'procedures': ['3', '4']}",
// "{ '_id': '5', 'name': 'Nelybina Maria', 'procedures': ['3', '4', '5']}",
// "{ '_id': '6', 'name': 'Andreeva Katya', 'procedures': ['1', '4'] }",
// "{ '_id': '7', 'name': 'Vasilyeva Vika', 'procedures': ['4', '5']}",
// "{ '_id': '8', 'name': 'Zakharove Kseniya', 'procedures': ['1', '3', '5']}"

// {
// 	"procedureId": "2",
// 	"procedureName": "Pedicure"
//   }

//   const addIdMasters = [
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
