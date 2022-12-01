import React from 'react';

// import img
import Image from '../assets/img/about1.jpeg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Fluke Danaipong
              </h2>
              <p className='mb-4 text-accent'>
                Internship in Siam Commercial Bank (SCB)
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                สวัสดีครับ ผมชื่อฟลุ๊ค ดนัยพงศ์ แสงอรุณ ขณะนี้เรียนอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ อยู่ปี 4 
                คณะวิทยาลัยเทคโนโลยีอุตสหกรรม สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ (คอมพิวเตอร์)
                <br />
                <br />
                ขณะนี้กำลังฝึกงานอยู่ที่ SCB ใน Project Core Banking Improvement เป็นการปรับปรุงระบบการฝากเงินของธนาคาร ใช้ความรู้ด้าน java api และ golang
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
