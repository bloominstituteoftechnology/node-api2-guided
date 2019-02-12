module.exports = {
  hubs: {
    find: findHubs,
    findById: findHubById,
    add: addHub,
    remove: removeHub,
    update: updateHub,
    clear: clearHubs,
    findHubMessages,
    findMessage,
    addMessage,
    removeMessage,
    updateMessage,
  },
};

let _hubs = [
  {
    id: 1,
    name: 'api-1',
  },
  {
    id: 2,
    name: 'api-2',
  },
  {
    id: 3,
    name: 'api-3',
  },
  {
    id: 4,
    name: 'api-4',
  },
  {
    id: 5,
    name: 'api-5',
  },
];

let messages = [];

let nextHubId = 6;
let nextMessageId = 1;

function findHubs(query) {
  const { page = 1, limit = 2, sortby = 'id', sortdir = 'asc', filter } = query;
  const offset = limit * (page - 1);
  const sorter = {
    // sort by id is numeric sort, sort by name is string sort
    id: function() {},
    name: function() {},
  };

  let hubs = _hubs.slice(offset, offset + (limit - 1)).sort(sorter[sortby]);

  // if you pass a filter callback it will filter the results
  // try calling db.hubs.find(h => h.name === 'api-2') from a route handler
  if (filter) {
    hubs = _hubs.filter(filter);
    return Promise.resolve(hubs);
  }

  return Promise.resolve(hubs);
}

function findHubById(id) {
  const hubId = Number(id);
  if (hubId) {
    const hub = _hubs.find(h => h.id === hubId);

    return Promise.resolve(hub);
  } else {
    return Promise.reject({
      code: 400,
      message: 'Is that a trick? Please provide a number for the id',
    });
  }
}

function addHub(hub) {
  if (hub && hub.name) {
    const newHub = {
      id: nextHubId++,
      ...hub,
      createdAt: new Date().toISOString(),
    };

    _hubs.push(newHub);

    return Promise.resolve(newHub);
  } else {
    return Promise.reject({
      code: 400,
      message: 'Please provide a name for the hub',
    });
  }
}

function removeHub(id) {
  const hubId = Number(id);
  if (hubId) {
    const hub = _hubs.find(h => h.id === hubId);
    _hubs = _hubs.filter(h => h.id !== hubId);

    return Promise.resolve(hub);
  } else {
    return Promise.reject({
      code: 500,
      message: 'That hub is here to stay! cannot be removed',
    });
  }
}

function updateHub(id, changes) {
  const hubId = Number(id);
  if (hubId && changes && typeof changes === 'object' && changes.name) {
    if (changes.id) {
      return Promise.reject({
        code: 400,
        message: "Can't touch this! The id cannot be changed",
      });
    }

    let index = _hubs.findIndex(h => h.id === hubId);
    if (index > -1) {
      _hubs[index] = { ..._hubs[index], ...changes };
      return Promise.resolve(_hubs[index]);
    } else {
      return Promise.resolve();
    }
  } else {
    return Promise.reject({
      code: 400,
      message:
        'Did you change your mind? Please provide a valid id and a set of changes that includes the name',
    });
  }
}

function clearHubs() {
  _hubs = [];

  let messages = [];

  nextHubId = 1;
}

function findHubMessages(hubId) {
  return [];
}

function findMessage(id) {
  return null;
}

function addMessage(message) {
  return null;
}

function removeMessage(id) {
  return null;
}

function updateMessage(id, changes) {
  return null;
}
