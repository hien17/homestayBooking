import SmallCard from './SmallCard';
import GetBookedContracts from '../GetBookedContracts';
import Loading from 'components/Loading';
import { useAddress } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { MARKETPLACE_ADDRESS } from 'utils/constant';


const Booked = ({ isButtonClicked,page,contractId,selectContract,setModalCheckoutOpened, assetsStatus}) => {
    const address = useAddress();
    const formatAddress = `"0x${address}"`;
    const formatMarketplaceAddress = `"${MARKETPLACE_ADDRESS}"`;
    const [tokens,setTokens] = useState([]);
    const GET_TOKENS = gql`
        {
            tokens(
                where: {
                owner: ${formatAddress}
                },
                orderBy: tokenId
            ) {
            id
            roomId
            provider
            renter
            creator
            price
            owner
            tokenId
            isCancelled
            }
        }
    `;
    const GET_LISTINGS = gql`
        {
            tokens(
            where: {
                owner: ${formatMarketplaceAddress}
                renter: ${formatAddress}
            },
            orderBy: tokenId
            ) {
                id
                roomId
                provider
                renter
                creator
                price
                owner
                tokenId
            }
            }
        `;
    const { loading:isLoading, error, data:queryData } = useQuery(GET_TOKENS);
    const { loading:isLoadingListings, error:errorListings, data:dataListings } = useQuery(GET_LISTINGS);
    if (queryData) console.log(queryData.tokens)
    useEffect(()=>{
    if (assetsStatus==="myassets"||page==="management") {
        if (queryData) 
            setTokens(queryData.tokens);
    }
    else {
        if (dataListings)
            setTokens(dataListings.tokens);
    }
       
    },[assetsStatus,queryData,dataListings,isLoading, isLoadingListings])
    const select = (id)=>{
        selectContract(id);
    }
    return (
        <>
            <div className="flex rounded-xl text-base mt-8 relative">
                <div className={`${page==="booking"?"min-[1580px]:grid-cols-5 min-[1400px]:grid-cols-4 gap-24":"gap-12"} m-[2px] rounded-xl w-full grid lg:grid-cols-3 min-[780px]:grid-cols-2 grid-cols-1 justify-between justify-items-center `}>
                    {isLoading && <div className='absolute py-40 flex justify-center'>
                                        <Loading/>
                                    </div>}
                    {isButtonClicked && tokens && !isLoading && (
                        <>
                            {tokens.map((data, index) => (
                                <SmallCard
                                    key={index}
                                    tokenId={data.tokenId}
                                    page={page}
                                    contractId={contractId}
                                    select={select}
                                    setModalCheckoutOpened={setModalCheckoutOpened}
                                    price={data.price}
                                    roomId={data.roomId}
                                    isCancelled={data.isCancelled}     
                                ></SmallCard>
                            ))}
                        </>
                    )}
                </div>
            </div>
            {address && !isLoading && tokens.length === 0 && 
                    <div className='justify-center flex w-full'>
                        <div className="text-4xl p-20 bg-gradient-to-r from-blue-700 via-sky-400 to-purple-600 bg-clip-text text-transparent w-fit mx-auto">
                            No contracts were created.
                        </div>  
                    </div>}
            {!address &&(
                <div className='justify-center flex w-full'>
                    <div className="text-4xl p-20 bg-gradient-to-r from-blue-700 via-sky-400 to-purple-600 bg-clip-text text-transparent w-fit mx-auto">
                        You need to connect wallet first.
                    </div>  
                </div>)
            }
        </>
    );
};

export default Booked;
