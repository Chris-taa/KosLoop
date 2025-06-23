"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    studentId: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null as File | null,
    agreeTerms: false,
  })

  const universities = [
    "Institut Teknologi Bandung (ITB)",
    "Universitas Indonesia (UI)",
    "Universitas Gadjah Mada (UGM)",
    "Universitas Padjadjaran (UNPAD)",
    "Institut Teknologi Sepuluh Nopember (ITS)",
    "Universitas Airlangga (UNAIR)",
    "Universitas Brawijaya (UB)",
    "Universitas Diponegoro (UNDIP)",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!")
      return
    }
    // TODO: Implement registration logic
    console.log("Registration attempt:", formData)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, profilePhoto: file })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KL</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">KosLoop</span>
            </div>
            <CardTitle className="text-2xl">Daftar Akun Baru</CardTitle>
            <CardDescription>Bergabung dengan komunitas mahasiswa KosLoop</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nama Lengkap</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Mahasiswa</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@kampus.ac.id"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <p className="text-xs text-gray-500">Gunakan email resmi dari kampus Anda</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">Universitas</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, university: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih universitas" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map((uni) => (
                      <SelectItem key={uni} value={uni}>
                        {uni}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId">NIM/NPM</Label>
                <Input
                  id="studentId"
                  type="text"
                  placeholder="Nomor Induk Mahasiswa"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profilePhoto">Foto Profil</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="profilePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("profilePhoto")?.click()}
                    className="w-full"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {formData.profilePhoto ? formData.profilePhoto.name : "Pilih Foto"}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimal 8 karakter"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Ulangi password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  Saya menyetujui{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Syarat & Ketentuan
                  </Link>{" "}
                  dan{" "}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Kebijakan Privasi
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Daftar Sekarang
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{" "}
                <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
