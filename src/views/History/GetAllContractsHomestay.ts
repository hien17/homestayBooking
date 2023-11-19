import { useContract, useContractRead, useAddress } from '@thirdweb-dev/react';

export default function GetAllContractsHomestay() {
    const address = useAddress();
    const { contract } = useContract(
        '0xC8339AEeCa4a529a7a0571b9654024600f5FC137'
    );
    const { data, isLoading } = useContractRead(
        contract,
        'getNftsIdOfProvider',
        [],
        { from: address }
    );
    return { data: data, isLoading: isLoading };
}
