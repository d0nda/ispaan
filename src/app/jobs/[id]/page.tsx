import prisma from '@/lib/prisma';
import { notFound, } from 'next/navigation'
import styles from './page.module.css'
import Image from 'next/image'
//import PaypalCheckoutButton from '@/components/Paypal_Buttons/PaypalCheckoutButton';
import Link from 'next/link'
import { PiFrameCornersBold } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
//import { Toast } from '@/components/Toast/Toast';
//import { PaypalToast } from '@/components/Toast/PaypalToast';




export default async function ProductDetails({ params }) {

    const session = await getServerSession(authOptions);
    const id = params.id;
    const product = await prisma.product.findUnique({
        where: {
            id: id,
        }
    })

    if (!product) notFound()


    if (session) {
        const { user } = session;

        return (
            <main>
                <div className="mb-8 flex mx-4 rounded-2xl bg-slate-300 dark:bg-white dark:bg-opacity-20 dark:backdrop-blur-md border border-opacity-30  border-black dark:border-white shadow-lg p-4">
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md">
                                <Image src={product.image} width={630} height={430} className={`img-fluid ${styles.Image}`} alt="product" />
                            </div>
                            <div className="col-md-4">
                                <h2>$ {product.price}</h2>
                                <p><span className="px-2"><FaDownload className={styles.iconstyle} /></span>Downloads: {product.downloadCount}</p>
                                <p><span className="px-2"><PiFrameCornersBold className={styles.iconstyle} /></span>Framework: {product.framework}</p>
                                <Link href={`product.downloadLink`}
                                    className="btn download-btn mb-3 px-4"
                                    id="download"
                                >
                                    Download
                                </Link>
                                {/*<PaypalButton_Product />*/}
                            </div>
                        </div>
                        <div className="col">
                            <div className="col-md">
                                <h3>{product.title}</h3>

                                <p>{product.description}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        //This a fallback return if theres no session 

        <div className="mb-8 flex mx-4 rounded-2xl bg-opacity-20 bg-white backdrop-blur-md border border-opacity-30 border-white shadow-lg p-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            <Image src={product.image} width={630} height={430} alt="Landing page image" className="object-cover w-full h-full" />
                        </div>
                        <h2 className="mt-3 mb-2 leading-tight tracking-tight font-bold text-white text-2xl md:text-3xl">{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="md:flex-1 px-4">
                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                                    <span className="font-bold text-indigo-600 text-3xl">{product.price}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p><span className="px-2"><FaDownload className={styles.iconstyle} /></span>Downloads: {product.downloadCount}</p>
                            <p><span className="px-2"><PiFrameCornersBold className={styles.iconstyle} /></span>Framework: {product.framework}</p>
                        </div>
                        <div className="flex py-4 space-x-4">
                            {/*<Toast />*/}
                        </div>
                        <div className="py-4 space-x-4">
                            {/*<PaypalToast />*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}