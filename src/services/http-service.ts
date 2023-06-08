import apiClient from "./api-client";

interface Entity {
    id: number;
    name: string;
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getData<T>() {
        const controller = new AbortController();
        
        const request = apiClient
        .get<T[]>(this.endpoint, {
          signal: controller.signal,
        })

        return { request, cancel: () => controller.abort()}
    }
    delete<T extends Entity>(entity: T) {
        return apiClient.delete(this.endpoint + "/" + entity.id)
    }

    create<T extends Entity>(entity: T) {
       return apiClient.post(this.endpoint, entity)
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + "/" + entity.id, entity)
    }

}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;

