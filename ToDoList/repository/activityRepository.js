const status = require('../const');
const mongoose = require('mongoose')
const { Schema } = require('mongoose');
const activitySchema = new Schema({
    name: String,

    description: String,

    dueDate: { type: Date , default: Date.now },

    status: { type: String, default: status.open },

  },

  {

    timestamps: {

      createdAt: 'createdAt',

      updatedAt: 'updatedAt',

      writeConcern: {w: 1, wtimeout: 2000},

    }
  }
);

activitySchema.index({ name: 1 });
const activityModel = mongoose.model('activities', activitySchema);

const addActivity = async(data) => {
    const result = await new activityModel(data).save()
    return result.toJSON({versionKey : false})
}

const removeActivity = async (id) => {

    return await update (id)
  
  }

  const updateActivity = async (id, params) => {

    const res = await activityModel.findOneAndUpdate(
  
      {_id:id},
  
      params,
  
      {upsert:false, new:true});
  
    return res?.toJSON({versionKey:false}) || res;
  
  }
  
  const retrieveActivity = async (id) => {
  
    const res = await activityModel.findById(id)
  
    return res?.toJSON({versionKey:false}) || res;
  
  }  

export default {
    addActivity,
    retrieveActivity,
    updateActivity,
    removeActivity
}
