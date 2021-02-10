import React from 'react';
import APIService from '../APIService';
import { injectable } from 'tsyringe';
import { Address } from '../../models/Address';

@injectable()
class AddressService {
    constructor(private apiService: APIService) { }
    routePrefix: string = 'Address';

    async setAddress(address: Address) {
        return await this.apiService.post<Address>(this.routePrefix, { data: address });
    }
    async getAddress(address: Address) {
        return await this.apiService.get<Address>(this.routePrefix, { data: address });
    }
}
export default AddressService;