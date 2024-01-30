// في ملف middleware.js

const nonSerializableMiddleware = (store) => (next) => (action) => {
    if (typeof action !== 'object' || action === null) {
        console.error('Action must be an object:', action);
        return;
    }


    console.log('Current state:', store.getState());

    const serializableAction = JSON.parse(JSON.stringify(action));

    next(serializableAction);
};

export default nonSerializableMiddleware;
