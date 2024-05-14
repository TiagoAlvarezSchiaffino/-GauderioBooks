const {Router} = require ('express')
const router = Router()

const {getAllBooks, postBook} = require ('../controllers/bookscontrollers')

router.get('/', getAllBooks);
router.post('/', postBook)

module.exports = router;