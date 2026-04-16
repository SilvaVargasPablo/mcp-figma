import React from 'react';

const NavigatorCard = ({ image, title, description, signatureImg, imageObjectPosition, imgNaveBg, imgNave01 }) => {
    return (
        <div
                className="group rounded-[var(--radius-card)] shadow-2xl overflow-hidden cursor-pointer w-full text-white self-start flex flex-row items-stretch min-h-[420px] md:min-h-0 md:flex-col md:max-w-[365px]"
        >
            {/* Image: large left column on mobile, top on md+ */}
            <div className="flex-shrink-0 w-3/5 md:w-full overflow-hidden relative rounded-l-[var(--radius-card)] md:rounded-l-none md:rounded-t-[var(--radius-card)] group">
                        <div className="p-2 relative h-full md:aspect-[365/400]" style={{ borderRadius: 'var(--radius-card)' }}>
                            {imgNaveBg && (
                                <img
                                    src={imgNaveBg}
                                    alt={`${title} background`}
                                    className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
                                />
                            )}
                            {imgNave01 && (
                                <img
                                    src={imgNave01}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover rounded-[12px] group-hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: imageObjectPosition || 'center' }}
                                />
                            )}
                            {image && !imgNaveBg && (
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover rounded-[12px] group-hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: imageObjectPosition || 'center' }}
                                />
                            )}
                        </div>
            </div>

            {/* Content: right column on mobile, bottom on md+ */}
            <div className="flex-1 px-6 py-6 relative flex flex-col justify-start">
                {/* Signature: absolute top-right on mobile, inline on md+ */}
                {signatureImg && (
                    <div className="absolute left-4 top-4 md:static md:mb-4">
                        <img src={signatureImg} alt="firma" className="h-16 md:h-20 w-20 md:w-auto object-contain" />
                    </div>
                )}

                <div className="mt-20 md:mt-2">
                    <h3 className="text-2xl font-monument font-bold text-white leading-tight mb-4">
                        {title}
                    </h3>
                    <p className="text-base font-['M_PLUS_1'] text-slate-300 leading-relaxed max-w-[360px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NavigatorCard;
