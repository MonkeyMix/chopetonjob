"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form"
  import { toast } from "@/components/ui/use-toast"
 
  const FormSchema = z.object({
    name: z.string().min(1, {
      message: "Username must be filled.",
    }),
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    profession: z.string().min(1, { message: "This field has to be filled." }),
    company: z.string().min(1, { message: "This field has to be filled." })
  })
  

export function Register() {
    const expertForm = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: "",
          email: "",
          profession: "",
          company: ""

        },
      })

      const candidatForm = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: "",
          email: "",
          profession: "",
          company: ""

        },
      })

      function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("SUBMIT: ", JSON.stringify(data, null, 2))
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }
    
    return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">C&aposest parti</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-emerald-100">
        <div className="flex justify-center">
            <div className="flex align-items w-full">
                <Image
                    src='/guy_calendar.svg'
                    width={800}
                    height={800}
                    alt="guy_calendar"
                />
            </div>
            <div>
            <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="expert">Expert</TabsTrigger>
                    <TabsTrigger value="candidat">Candidat</TabsTrigger>
                </TabsList>
                <div>
                    <TabsContent value="expert">
                        <Card>
                        <DialogTitle className="pb-5 pt-5 text-center" style={{ minHeight: '80px' }}>Rejoins la communauté et gagne de l&aposargent en partageant ton savoir.</DialogTitle>
                        <Form {...expertForm}>
                            <form onSubmit={expertForm.handleSubmit(onSubmit)} className="w-full space-y-6 ">
                                <CardContent className="space-y-2 pt-2 flex flex-col items-center">
                                    <div className="space-y-1">
                                    <FormField control={expertForm.control} name="name"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="w-full" placeholder="name" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                    <div className="space-y-1">
                                    <FormField control={expertForm.control} name="email"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                    <div className="space-y-1">
                                    <FormField name="profession"
                                        render={({ field }) => (
                                        <FormItem>
                                            <Input placeholder="profession" {...field} />
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                    <div className="space-y-1">
                                    <FormField name="company"
                                        render={({ field }) => (
                                        <FormItem>
                                            <Input placeholder="company" {...field} />
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    <Button type="submit">C&aposest parti</Button>
                                </CardFooter>
                            </form>
                        </Form>
                        </Card>
                    </TabsContent>
                    <TabsContent value="candidat">
                        <Card>
                        <DialogTitle className="pb-5 pt-5 text-center" style={{ minHeight: '80px' }}>Réserve ta simulation d&aposentretien.</DialogTitle>
                        <Form {...candidatForm}>
                        <form onSubmit={candidatForm.handleSubmit(onSubmit)} className="w-full space-y-6 ">
                                <CardContent className="space-y-2 pt-2 flex flex-col items-center">
                                    <div className="space-y-1">
                                    <FormField control={candidatForm.control} name="name"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input className="w-full" placeholder="name" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                    <div className="space-y-1">
                                    <FormField control={candidatForm.control} name="email"
                                        render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="email" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                    <div className="space-y-1">
                                    <FormField name="profession"
                                        render={({ field }) => (
                                        <FormItem>
                                            <Input placeholder="profession" {...field} />
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                    <div className="space-y-1">
                                    <FormField name="company"
                                        render={({ field }) => (
                                        <FormItem>
                                            <Input placeholder="company" {...field} />
                                        </FormItem>
                                        )}
                                    />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-center">
                                    <Button type="submit">C&aposest parti</Button>
                                </CardFooter>
                            </form>
                        </Form>
                        </Card>
                    </TabsContent>
                </div>

            </Tabs>
        </div>
    </div>
      </DialogContent>
    </Dialog>
    );
}