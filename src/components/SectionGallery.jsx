import 'photoswipe/dist/photoswipe.css';
import { Gallery as ImageGallery, Item } from 'react-photoswipe-gallery';

export default function SectionGallery() {
    return (
        <section className="relative px-8 overflow-hidden">
            <div className="relative z-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                <ImageGallery>
                    <div className="flex flex-wrap gap-4 overflow-hidden">
                        <Item original="/gallery-01.jpg" thumbnail="/gallery-01.jpg" width="1061" height="1591">
                            {({ ref, open }) => <img ref={ref} onClick={open} src="/gallery-01.jpg" alt="" className="object-cover w-full h-full" />}
                        </Item>

                        <div className="flex w-full gap-4 overflow-hidden">
                            <div className="aspect-[3/4] h-40 md:h-80">
                                <Item original="/gallery-02.jpg" thumbnail="/gallery-02.jpg" width="1061" height="1591">
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="/gallery-02.jpg" alt="" className="object-cover w-full h-full" />
                                    )}
                                </Item>
                            </div>

                            <div className="w-full h-40 md:h-80">
                                <Item original="/gallery-03.jpg" thumbnail="/gallery-03.jpg" width="1061" height="691">
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="/gallery-03.jpg" alt="" className="object-cover w-full h-full" />
                                    )}
                                </Item>
                            </div>
                        </div>

                        <Item original="/gallery-04.jpg" thumbnail="/gallery-04.jpg" width="1061" height="691">
                            {({ ref, open }) => <img ref={ref} onClick={open} src="/gallery-04.jpg" alt="" className="object-cover w-full h-full" />}
                        </Item>

                        <div className="flex w-full gap-4 overflow-hidden">
                            <div className="w-full h-40 md:h-80">
                                <Item original="/gallery-05.jpg" thumbnail="/gallery-05.jpg" width="1036" height="1591">
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="/gallery-05-thumb.jpg" alt="" className="object-cover w-full h-full" />
                                    )}
                                </Item>
                            </div>
                            <div className="aspect-[3/4] h-40 md:h-80">
                                <Item original="/gallery-06.jpg" thumbnail="/gallery-06.jpg" width="1036" height="1591">
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="/gallery-06.jpg" alt="" className="object-cover w-full h-full" />
                                    )}
                                </Item>
                            </div>
                        </div>

                        <div className="flex w-full gap-4 overflow-hidden">
                            <div className="w-full h-40 md:h-80">
                                <Item original="/gallery-07.jpg" thumbnail="/gallery-07.jpg" width="1036" height="691">
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src="/gallery-07.jpg"
                                            alt=""
                                            className="object-cover object-left w-full h-full"
                                        />
                                    )}
                                </Item>
                            </div>

                            <div className="w-full h-40 md:h-80">
                                <Item original="/gallery-08.jpg" thumbnail="/gallery-08.jpg" width="1036" height="691">
                                    {({ ref, open }) => (
                                        <img
                                            ref={ref}
                                            onClick={open}
                                            src="/gallery-08.jpg"
                                            alt=""
                                            className="object-cover object-right w-full h-full"
                                        />
                                    )}
                                </Item>
                            </div>
                        </div>
                    </div>
                </ImageGallery>
            </div>
            <div
                className="absolute -left-24 top-[60%] -scale-x-100"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay="250"
                data-aos-once="true"
            >
                <img src="/orn-flower-10.png" alt="" className="w-32" />
            </div>
        </section>
    );
}
