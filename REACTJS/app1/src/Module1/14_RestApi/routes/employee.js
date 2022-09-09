import express from 'express';

const router = express.Router();

router.get('/employees', (req, res) => {
  return res.send('GET HTTP method on employee resource');
});
 
router.post('/employees', (req, res) => {
  return res.send('POST HTTP method on employee resource');
});
 
router.put('/employees/:empId', (req, res) => {
  return res.send(`PUT HTTP method on employee/${req.params.empId} resource`);
});
 
router.delete('/employees/:empId', (req, res) => {
  return res.send(`DELETE HTTP method on employee/${req.params.empId} resource`);
});

export default router;