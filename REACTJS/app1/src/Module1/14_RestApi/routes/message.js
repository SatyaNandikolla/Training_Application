import express from 'express';

const router = express.Router();

router.get('/messages', (req, res) => {
  return res.send('GET HTTP method on message resource');
});
 
router.post('/messages', (req, res) => {
  return res.send('POST HTTP method on message resource');
});
 
router.put('/messages/:msgId', (req, res) => {
  return res.send(`PUT HTTP method on message/${req.params.msgId} resource`);
});
 
router.delete('/messages/:msgId', (req, res) => {
  return res.send(`DELETE HTTP method on message/${req.params.msgId} resource`);
});

export default router;