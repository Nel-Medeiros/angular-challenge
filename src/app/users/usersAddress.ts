export interface UsersAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UsersGeo;

}

export interface UsersGeo {
    lat: string;
    lng: string;
}