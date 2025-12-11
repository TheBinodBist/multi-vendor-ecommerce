import React, { useState } from 'react';
import { CustomCategory } from '../types';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon,  ChevronRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: CustomCategory[]; // Root categories
}

const CategoriesSidebar = ({ open, onOpenChange, data }: Props) => {
  const [parentCategories, setParentCategories] = useState<CustomCategory[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CustomCategory | null>(null);

  const router = useRouter();

  const backgroundColor = selectedCategory?.color || "white"

  const handleOpenChange = (open: boolean) => {
    // Reset state when closing
    if (!open) {
      setParentCategories(null);
      setSelectedCategory(null);
    }
    onOpenChange(open);
  };

  // Show parentCategories if present, otherwise show root categories
  const currentCategories = parentCategories ?? data ?? [];

  const handleCategoryClick = (category: CustomCategory) => {
    if (category.subcategories && category.subcategories.length > 0) {
      // Navigate into subcategories
      setParentCategories(category.subcategories as CustomCategory[]);
      setSelectedCategory(category);
    } else {
      // Leaf category clicked
      if (parentCategories && selectedCategory) {
        router.push(`/${selectedCategory.slug}/${category.slug}`);
      } else {
        // Main/root category clicked
        if (category.slug === "all") {
          router.push(`/`);
        } else {
          router.push(`/${category.slug}`);
        }
      }
      handleOpenChange(false); // Close sidebar after navigation
    }
  };

  const handleBackClick = () => {
    setParentCategories(null);
    setSelectedCategory(null);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{ backgroundColor }}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
        <ScrollArea className="overflow-y-auto">
  {parentCategories && (
    <button
      onClick={handleBackClick}
      className="cursor-pointer w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
    >
      <ChevronLeftIcon className="size-4 mr-2" />
      Back
    </button>
  )}

  {currentCategories.map((category) => (
    <button
      className="cursor-pointer w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center text-base font-medium"
      key={category.slug}
      onClick={() => handleCategoryClick(category)}
    >
      {category.name}
      {category.subcategories && category.subcategories.length > 0 && (
        <ChevronRightIcon className="size-4" />
      )}
    </button>
  ))}
</ScrollArea>

      </SheetContent>
    </Sheet>
  );
};

export default CategoriesSidebar;
