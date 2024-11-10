"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FeatureFiltersProps {
  types: string[];
  products: string[];
  teams: string[];
  selectedType: string;
  selectedProduct: string;
  selectedTeam: string;
  onTypeChange: (value: string) => void;
  onProductChange: (value: string) => void;
  onTeamChange: (value: string) => void;
}

export function FeatureFilters({
  types,
  products,
  teams,
  selectedType,
  selectedProduct,
  selectedTeam,
  onTypeChange,
  onProductChange,
  onTeamChange,
}: FeatureFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Select value={selectedType} onValueChange={onTypeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedProduct} onValueChange={onProductChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by product" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Products</SelectItem>
          {products.map((product) => (
            <SelectItem key={product} value={product}>
              {product}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedTeam} onValueChange={onTeamChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by team" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Teams</SelectItem>
          {teams.map((team) => (
            <SelectItem key={team} value={team}>
              {team}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}