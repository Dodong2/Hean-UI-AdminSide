import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogDemo() {
  return (
    <Dialog className='border-custom-red'>
      <DialogTrigger asChild>
        <Button variant="outline" className='mt-4'>Add Beds</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-custom-blue'>Beds</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Beds
            </Label>
            <Input
              id="name"
              defaultValue="Number of Beds"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className='gap-3'>
          <Button type="submit">Save Beds</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
