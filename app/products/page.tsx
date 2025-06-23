"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, Heart, BookOpen, Laptop, Home, Shirt } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([0, 5000000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])

  const products = [
    {
      id: 1,
      title: "Buku Kalkulus dan Geometri Analitik Edisi 9",
      price: 75000,
      originalPrice: 150000,
      condition: "Baik",
      seller: {
        name: "Ahmad Rizki",
        university: "ITB",
        rating: 4.8,
        location: "Bandung"
      },
      image: "/placeholder.svg?height=200&width=200",
      category: "Buku",
      description: "Buku kalkulus lengkap dengan latihan soal. Kondisi masih bagus, tidak ada coretan.",
      views: 45,
      likes: 12,
      isLiked: false
    },
    {
      id: 2,
      title: "Laptop Asus VivoBook 14 i5 Gen 11",
      price: 4500000,
      originalPrice: 7000000,
      condition: "Sangat Baik",
      seller: {
        name: "Sari Dewi",
        university: "UI",
        rating: 4.9,
        location: "Jakarta"
      },
      image: "/placeholder.svg?height=200&width=200",
      category: "Elektronik",
      description: "Laptop untuk kuliah dan kerja. RAM 8GB, SSD 512GB. Masih garansi resmi.",
      views: 128,
      likes: 34,
      isLiked: true
    },
    {
      id: 3,
      title: "Meja Belajar Minimalis dengan Laci",
      price: 200000,
      originalPrice: 400000,
      condition: "Baik",
      seller: {
        name: "Budi Santoso",
        university: "UGM",
        rating: 4.7,
        location: "Yogyakarta"
      },
      image: "/placeholder.svg?height=200&width=200",
      category: "Furnitur",
      description: "Meja belajar kayu solid dengan 2 laci. Cocok untuk kamar kos.",
      views: 67,
      likes: 18,
      isLiked: false
    },
    {
      id: 4,
      title: "Jaket Hoodie Uniqlo Original",
      price: 120000,
      originalPrice: 299000,
      condition: "Seperti Baru",
      seller: {
        name: "Maya Putri",
        university: "UNPAD",
        rating: 4.8,
        location: "Bandung"
      },
      image: "/placeholder.svg?height=200&width=200",
      category: "Fashion",
      description: "Hoodie Uniqlo size M, warna navy. Baru dipakai 2-3 kali.",
      views: 89,
      likes: 25,
      isLiked: false
    },
    {
      id: 5,
      title: "Kalkulator Scientific Casio FX-991ES Plus",
      price: 85000,
      originalPrice: 150000,
      condition: "Baik",
      seller: {
        name: "Andi Pratama",
        university: "ITS",
        rating: 4.6,
        location: "Surabaya"
      },
      image: "/placeholder.svg?height=200&width=200",
      category: "Elektronik",
      description: "Kalkulator scientific untuk mata kuliah teknik. Fungsi lengkap.",
      views: 34,
      likes: 8,
      isLiked: false
    },
    {
      id: 6,
      title: "Novel Laskar Pelangi - Andrea Hirata",
      price: 25000,
      originalPrice: 50000,
      condition: "Baik",
      seller: {
        name: "Rina Sari",
        university: "UNAIR",
        rating: 4.9,
        location: "Surabaya"
      },
      image: "/placeholder.svg?height=200&width=200",
      category: "Buku",
      description: "Novel bestseller Indonesia. Kondisi buku masih bagus dan bersih.",
      views: 23,
      likes: 6,
      isLiked: false
    }
  ]

  const categories = [
    { name: "Buku", icon: BookOpen, count: 1250 },
    { name: "Elektronik", icon: Laptop, count: 890 },
    { name: "Furnitur", icon: Home, count: 650 },
    { name: "Fashion", icon: Shirt, count: 2100 }
  ]

  const conditions = ["Seperti Baru", "Sangat Baik", "Baik", "Cukup Baik"]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    }
  }

  const handleConditionChange = (condition: string, checked: boolean) => {
    if (checked) {
      setSelectedConditions([...selectedConditions, condition])
    } else {
      setSelectedConditions(selectedConditions.filter(c => c !== condition))
    }
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Seperti Baru': return 'bg-green-100 text-green-800'
      case 'Sangat Baik': return 'bg-blue-100 text-blue-800'
      case 'Baik': return 'bg-yellow-100 text-yellow-800'
      case 'Cukup Baik': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">KosLoop</span>
            </Link>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari produk, kategori, atau penjual..."
                  className="pl-12 pr-4 py-3 w-full"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Filter Produk</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Kategori</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.name}
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={(checked) => 
                          handleCategoryChange(category.name, checked as boolean)
                        }
                      />
                      <label htmlFor={category.name} className="text-sm flex items-center space-x-2 cursor-pointer">
                        <category.icon className="w-4 h-4" />
                        <span>{category.name}</span>
                        <span className="text-gray-500">({category.count})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Rentang Harga</h4>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000000}
                    step={50000}
                    className="w-full"
                  />
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Rp {priceRange[0].toLocaleString()}</span>
                    <span>-</span>
                    <span>Rp {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Kondisi</h4>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition}
                        checked={selectedConditions.includes(condition)}
                        onCheckedChange={(checked) => 
                          handleConditionChange(condition, checked as boolean)
                        }
                      />
                      <label htmlFor={condition} className="text-sm cursor-pointer">
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Lokasi</h4>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih kota" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bandung">Bandung</SelectItem>
                    <SelectItem value="jakarta">Jakarta</SelectItem>
                    <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                    <SelectItem value="surabaya">Surabaya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Terapkan Filter
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Semua Produk</h1>
                <p className="text-gray-600">Menampilkan {products.length} produk</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Terbaru</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="popular">Terpopuler</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setView
