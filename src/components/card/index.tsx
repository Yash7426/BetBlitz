import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import MyModal from "../modal";
export function CardHoverEffectDemo(props: any) {
  return (
    <div className="max-w-6xl mx-auto px-8">
      
      <MyModal />

      <HoverEffect items={props?.projects} />
    </div>
  );
}
// export const 