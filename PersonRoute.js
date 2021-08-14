const express = require("express");
const router = express.Router();
const Person = require("./PersonSchema");

//Post person
router.post("/", async (req, res) => {
  try {
      
    const postPerson = await new Person({
      Name: req.body.Name,
      Age: req.body.Age,
    });
    const savePerson = await postPerson.save();
    res.status(200).json(savePerson);
  } catch (error) {
    res.json({ Error: error });
  }
});
//getby id
router.get("/:id", async (req, res) => {
    try {
        const getById=await Person.findById(req.params.id);
      res.status(200).json(getById);
    } catch (error) {
      res.json({ Error: error });
    }
  });

  //getall person
router.get("/", async (req, res) => {
    try {
        const getAll=await Person.find ();
      res.status(200).json(getAll);
    } catch (error) {
      res.json({ Error: error });
    }
  });


//update 
router.put("/:id", async (req, res) => {
    try {
        const update=await Person.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}});
      // const postPerson = await new Person({
      //   Name: req.body.Name,
      //   Age: req.body.Age,
      // });
      // const savePerson = await postPerson.save();
      res.status(200).json(update);
    } catch (error) {
      res.json({ Error: error });
    }
  });

  //delete 
router.delete("/:id", async (req, res) => {
    try {
        const deletePerson=await Person.remove({_id:req.params.id});
      // const postPerson = await new Person({
      //   Name: req.body.Name,
      //   Age: req.body.Age,
      // });
      // const savePerson = await postPerson.save();
      res.status(200).json(deletePerson);
    } catch (error) {
      res.json({ Error: error });
    }
  });

module.exports = router;
