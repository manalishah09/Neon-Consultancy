	$.fbuilder.controls[ 'fcurrency' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'fcurrency' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Currency",
			ftype:"fcurrency",
			predefined:"",
			predefinedClick:false,
			required:false,
			readonly:false,
			size:"small",
			currencySymbol:"$",
			currencyText:"USD",
			thousandSeparator:",",
			centSeparator:".",
			min:"",
			max:"",
			formatDynamically:false,

			getFormattedValue:function( value )
				{
					var ts = this.thousandSeparator,
						cs = ((cs = $.trim(this.centSeparator)) !== '') ? cs : '.',
						v = $.fbuilder.parseVal(value, ts, cs),
						parts = [],
						counter = 0,
						str = '',
						sign = '';

					if( !isNaN( v ) )
					{
						if(v < 0) sign = '-';
						v = ABS(v);
						parts = v.toString().split(".");

						for( var i = parts[0].length-1; i >= 0; i--)
						{
							counter++;
							str = parts[0][i] + str;
							if( counter%3 == 0 && i != 0 ) str = ts + str;
						}
						parts[0] = str;

						if(parts[1])
						{
							if(parts[1].length == 1) parts[1] += '0';
						}
						else parts[ 1 ] = '00';

						return this.currencySymbol+sign+parts.join(cs)+this.currencyText;
					}
					else
					{
						return value;
					}
				},
			show:function()
				{
					return '<div class="fields '+this.csslayout+' cff-currency-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input '+(( this.readonly )? 'readonly' : '' )+' id="'+this.name+'" name="'+this.name+'" class="field cffcurrency '+this.size+((this.required)?" required":"")+'" type="text" value="'+$.fbuilder.htmlEncode( this.getFormattedValue( this.predefined ) )+'" '+( ( !/^\s*$/.test( this.min) ) ? 'min="'+$.fbuilder.parseVal( this.min, this.thousandSeparator, this.centSeparator )+'" ' : '' )+( ( !/^\s*$/.test( this.max) ) ? ' max="'+$.fbuilder.parseVal( this.max, this.thousandSeparator, this.centSeparator )+'" ' : '' )+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			after_show:function()
				{
					var me = this;
					if( this.formatDynamically )
					{

						$( document ).on( 'change', '[name="' + me.name + '"]', function(){
							this.value = me.getFormattedValue( this.value );
						} );
					}

					if( typeof $[ 'validator' ] != 'undefined' )
					{
						if(!('cffcurrency' in $.validator.methods))
							$.validator.addMethod(
								'cffcurrency',
								function(v, el)
								{
									var f = el.id.match( /_\d+$/),
										esc = $.fbuilder.escape_symbol,
										r;

									e = $.fbuilder['forms'][f[0]].getItem( el.name );
									r = new RegExp('^\\s*('+esc(e.currencySymbol)+')?\\s*\\-?\\d+('+esc(e.thousandSeparator)+'\\d{3})*('+e.centSeparator+'\\d+)?\\s*('+esc(e.currencyText)+')?\\s*$','i');

									return this.optional(el) || r.test(v) || $.isNumeric(v);
								},
								$.validator.messages['currency']
							);
						$.validator.methods.min = function(v, el, p)
							{
								var f = el.id.match( /_\d+$/), e;

								if(f) e = $.fbuilder['forms'][f[0]].getItem(el.name);
								if(e) v = e.val();
								return this.optional(el) || v >= p;
							};
						$.validator.methods.max = function(v, el, p)
							{
								var f = el.id.match( /_\d+$/), e;

								if(f) e = $.fbuilder['forms'][f[0]].getItem(el.name);
								if(e) v = e.val();

								return this.optional(el) || v <= p;
							};
					}
				},
			val:function()
				{
					var e = $( '[id="' + this.name + '"]:not(.ignore)' );
					if( e.length )
					{
						var v = $.trim( e.val() );

						v = v.replace( new RegExp( $.fbuilder[ 'escape_symbol' ](this.currencySymbol), 'g' ), '' )
						     .replace( new RegExp( $.fbuilder[ 'escape_symbol' ](this.currencyText), 'g' ), '' );

						return $.fbuilder.parseVal( v, this.thousandSeparator, this.centSeparator );
					}
					return 0;
				}
		}
	);