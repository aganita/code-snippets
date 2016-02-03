// Summary of this usage 

// 1 function as method call
obj.func(...)    // this = obj
obj["func"](...)

// 2 sumple function call
func(...) // this = window (ES3) /undefined (ES5)

// 3 in new
new func() // this = {} (новый объект)

// 4 explicitly
func.apply(context, args) // this = context (явная передача)
func.call(context, arg1, arg2, ...)
