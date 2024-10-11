import activityRepo from '../repository/activityRepository.js';

const addActivity = async (data) => {
		const content = data  
    	content['status'] = 'open';
		return await activityRepo.addActivity(content)	
    
}

const updateActivity = async (data) => {
	return await activityRepo.updateActivity(id,params)
}

const removeActivity = async (id) => {
	return activityRepo.remove(id)
}

export {
	retrieveActivity,
	addActivity,
	updateActivity,
	removeActivity
}

