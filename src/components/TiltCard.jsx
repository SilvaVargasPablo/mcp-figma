import React from 'react';

const TiltCard = ({ image, title, description, signatureImg, imageObjectPosition }) => {
    return (
        <div
                className="group rounded-[var(--radius-card)] shadow-2xl overflow-hidden cursor-pointer w-full text-white self-start flex flex-row items-stretch min-h-[420px] md:min-h-0 md:flex-col md:max-w-[365px]"
        >
            {/* Image: large left column on mobile, top on md+ */}
            <div className="flex-shrink-0 w-3/5 md:w-full overflow-hidden relative rounded-l-[var(--radius-card)] md:rounded-l-none md:rounded-t-[var(--radius-card)]">
                        <div className="p-2 relative" style={{ borderRadius: 'var(--radius-card)' }}>
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover rounded-[12px]"
                                style={{ objectPosition: imageObjectPosition || 'center' }}
                            />

                            {/* Overlay image (optional) - scales on card hover */}
                            {/** Pass `overlayImage` prop to show this image over the base photo */}
                            {/** It will zoom on hover using group-hover */}
                            {typeof overlayImage !== 'undefined' && overlayImage && (
                                <img
                                    src={overlayImage}
                                    alt={`${title} overlay`}
                                    className="absolute inset-0 m-auto w-2/3 h-2/3 object-contain pointer-events-none transition-transform duration-500 group-hover:scale-110 rounded-[10px]"
                                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                                />
                            )}
                        </div>
            </div>

            {/* Content: right column on mobile, bottom on md+ */}
            <div className="flex-1 px-6 py-6 relative flex flex-col justify-start">
                {/* Signature: absolute top-right on mobile, inline on md+ */}
                {signatureImg && (
                    <div className="absolute right-4 top-4 md:static md:mb-4">
                        <img src={signatureImg} alt="firma" className="h-16 md:h-20 w-auto object-contain" />
                    </div>
                )}

                <div className="mt-6 md:mt-2">
                    <h3 className="text-2xl font-['M_PLUS_1'] font-bold text-white leading-tight mb-4">
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

export default TiltCard;
