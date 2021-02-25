let resourceList = [
    {
        id: 0,
        name: 'apple'
    },
    {
        id: 1,
        name: 'microsoft'
    },
    {
        id: 2,
        name: 'xiomi'
    }
]
// Service for resources
function resourceService() {
    /// load all resources
    const loadAllResources = (req,res) => {
        res.status(200);
        res.send(resourceList);
    }
    /// load single resource
    const loadResource = (req,res) => {
        const resource = resourceList.find((i) => i.id == req.params.id)
        let result;
        if(resource) {
            result = resource;
        } else {
            result = {message: 'No resource found!'}
        }

        res.status(200);
        res.send(result);
    }
    /// create new resource
    const createResource = (req,res) => {
        let newResource = {
            name: req.body.name,
            id: resourceList.length
        };
        resourceList.push(newResource)
        res.status(200);
        res.send(newResource)
    }
    /// update resource
    const updateResource = (req,res) => {
        let id = req.params.id;
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        resourceList = resourceList.map((item) => {
            if(item.id == id) {
                if(!!name) item.name = name;
                if(!!phone) item.phone = phone;
                if(!!email) item.email = email;
            }
            return item;
        })
        res.status(200).send('Resource updated successfully!')
    }

    // remove resource
    const deleteResource = (req,res) => {
        let id = req.params.id;
        let index = resourceList.findIndex((i) => i.id == id);
        resourceList.splice(index,1)
        res.status(200).send('Resource removed successfully!')
    }


    return {
        loadAllResources,
        loadResource,
        createResource,
        updateResource,
        deleteResource
    }
}


module.exports = resourceService();