import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

  import React from 'react'
  
  export default function SelectButton() {
    return (

        <Select>
        <SelectTrigger className="w-[180px] text-darkPrimary bg-lightGray border-none mx-auto -mt-56 mb-12">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Ceramics">Ceramics</SelectItem>
          <SelectItem value="Tables">Tables</SelectItem>
          <SelectItem value="Chairs">Chairs</SelectItem>
          <SelectItem value="Crockery">Crockery</SelectItem>
          <SelectItem value="Tableware">Tableware</SelectItem>
          <SelectItem value="Cutlery">Cutlery</SelectItem>
        </SelectContent>
      </Select>
      
        
    )
    }
  
  
  