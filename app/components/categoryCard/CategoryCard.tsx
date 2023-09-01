import React from "react";
import "./categoryCard.scss";
import Link from "next/link";
import Image from "next/image";
const CategoryCard = ({ image, name }: any) => {
  return (
    <div className="categoryCard">
      <Image className={image} src={image} height={700} width={1300} alt="" />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className="info">
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
