import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover"

const provinces = [
    { value: "aceh", label: "Aceh" },
    { value: "sumut", label: "North Sumatra" },
    { value: "sumbar", label: "West Sumatra" },
    { value: "riau", label: "Riau" },
    { value: "jambi", label: "Jambi" },
    { value: "sumsel", label: "South Sumatra" },
    { value: "babel", label: "Bangka Belitung" },
    { value: "lampung", label: "Lampung" },
    { value: "jakarta", label: "Jakarta Capital Region" },
    { value: "jabar", label: "West Java" },
    { value: "jateng", label: "Central Java" },
    { value: "yogyakarta", label: "Special Region of Yogyakarta" },
    { value: "jatim", label: "East Java" },
    { value: "banten", label: "Banten" },
    { value: "bali", label: "Bali" },
    { value: "ntb", label: "West Nusa Tenggara" },
    { value: "ntt", label: "East Nusa Tenggara" },
    { value: "kalbar", label: "West Kalimantan" },
    { value: "kalteng", label: "Central Kalimantan" },
    { value: "kalsel", label: "South Kalimantan" },
    { value: "kaltim", label: "East Kalimantan" },
    { value: "kalut", label: "North Kalimantan" },
    { value: "sulut", label: "North Sulawesi" },
    { value: "sulteng", label: "Central Sulawesi" },
    { value: "sulsel", label: "South Sulawesi" },
    { value: "sultra", label: "Southeast Sulawesi" },
    { value: "gorontalo", label: "Gorontalo" },
    { value: "sulbar", label: "West Sulawesi" },
    { value: "malut", label: "North Maluku" },
    { value: "maluku", label: "Maluku" },
    { value: "papua", label: "Papua" },
    { value: "pabar", label: "West Papua" },
    { value: "papuatengah", label: "Central Papua" },
    { value: "papuaselatan", label: "South Papua" },
    { value: "papuapegunungan", label: "Highland Papua" },
    { value: "papuabaratdaya", label: "Southwest Papua" },
]


export default ({ selected }: { selected: number }) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(provinces[selected].value)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between w-full text-muted dark:text-foreground"
                >
                    {value
                        ? provinces.find((province) => province.value === value)?.label
                        : "Select region..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[calc(300px-2rem)]">
                <Command>
                    <CommandInput placeholder="Cari provinsi..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Provinsi tidak ditemukan.</CommandEmpty>
                        <CommandGroup>
                            {provinces.map((province) => (
                                <CommandItem
                                    key={province.value}
                                    value={province.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {province.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === province.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
