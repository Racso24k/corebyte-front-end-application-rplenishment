// src/services/replenishment-api.service.js

import axios from "axios";

// Cliente HTTP con baseURL configurada
const http = axios.create({
    baseURL: "https://corebyte.azurewebsites.net/api/v1"
});

// Clase del servicio para consumir los endpoints de Replenishment
export class ReplenishmentApiService {
    constructor(_resourceEndpoint) {
        this.resourceEndpoint = _resourceEndpoint;
    }

    getAllResources() {
        return http.get(this.resourceEndpoint);
    }

    getResourceById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

    createResource(resource) {
        return http.post(this.resourceEndpoint, resource);
    }

    updateResource(id, resource) {
        return http.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    deleteResource(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`);
    }
}

