/**
 * Copyright (c) 2024 Nguyen Chau
 *
 * Created 2024-08-21 10:41
 */
interface TipAddress {
    anonymizer: string;
    blacklist: string;
    city: string;
    country: string;
    hostname: string;
    ip: string;
    iso: string;
    isp: string;
    org: string;
    region: string;
    time: {
        local_string: string;
        local_unix: string;
        offset: string;
        zone: string;
    };
}
declare const useIpAddress: () => {
    ipAddress: TipAddress | undefined;
    error: string | null;
    isLoading: boolean;
};
export default useIpAddress;
